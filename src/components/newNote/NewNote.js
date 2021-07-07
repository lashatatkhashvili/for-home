import React, { useCallback, useEffect } from 'react';
import useStyles from './NewNote.style';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MaterialTypography from '../materialTypography/MaterialTypography';
import CloseButton from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useFormik } from 'formik';
import { createNoteSchema } from '../../validation/noteSchemas';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCurrentBuildingId } from '../../reducers/currentBuilding/currentBuilding.selectors';
import moment from 'moment';
import LoaderWrapper from '../../hoc/loaderWrapper/LoaderWrapper';
import {
  selectCurrentNote,
  selectIsCreatingNote,
  selectIsFetchingNote,
  selectIsUpdatingNote,
} from '../../reducers/profile/profile.selectors';
import { createNote, fetchNoteById, updateNoteById } from '../../reducers/profile/profile.actions';

const NewNote = props => {
  const { isOpen, onClose, noteId } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const currentNote = useSelector(selectCurrentNote);
  const currentBuildingId = useSelector(selectCurrentBuildingId);
  const isCreatingNote = useSelector(selectIsCreatingNote);
  const isFetchingNote = useSelector(selectIsFetchingNote);
  const isUpdatingNote = useSelector(selectIsUpdatingNote);
  const isLoading = isCreatingNote || isFetchingNote || isUpdatingNote;

  const createNewNote = useCallback(note => dispatch(createNote(note)), [dispatch]);
  const fetchCurrentNote = useCallback(noteId => dispatch(fetchNoteById(noteId)), [dispatch]);
  const updateNote = useCallback((noteId, note) => dispatch(updateNoteById(noteId, note)), [dispatch]);

  useEffect(() => {
    setFieldValue('noteDate', moment());

    if (noteId) {
      fetchCurrentNote(noteId);
    }
  }, [noteId]);

  const formValues = () => {
    let values = {
      noteType: '',
      noteDate: null,
      noteText: '',
    };

    if (noteId && currentNote) {
      values = {
        ...values,
        id: currentNote.id,
        noteType: currentNote.noteType,
        noteDate: moment(currentNote.noteDate),
        noteText: currentNote.noteText,
      };
    }

    return values;
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue, resetForm } = useFormik({
    enableReinitialize: true,

    initialValues: formValues(),

    validationSchema: createNoteSchema,

    onSubmit: values => {
      const note = {
        buildingId: currentBuildingId,
        noteType: values.noteType,
        noteDate: moment(values.noteDate).format('YYYY-MM-DD'),
        noteText: values.noteText,
      };

      if (!noteId) {
        createNewNote({ userId: Number(userId), ...note }).then(response => {
          onClose();
        });
      } else {
        updateNote(noteId, note).then(response => {
          onClose();
        });
      }
    },
  });

  const handleDateChange = date => {
    setFieldValue('noteDate', date);
  };

  const noteTypes = useCallback(() => {
    return [
      { key: 'NOTE', label: t('Note') },
      { key: 'PHONE_CALL', label: t('Phone call') },
      { key: 'OFFLINE_CONVERSATION', label: t('Frontal conversation') },
      { key: 'WHATSAPP_CONVERSATION', label: t('Whatsapp conversation') },
      { key: 'OTHER', label: t('Other') },
    ];
  }, []);

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <LoaderWrapper isLoading={isLoading} style={{ height: '410px' }}>
        <DialogTitle disableTypography className={classes.dialogTitle}>
          <Grid container justify="space-between" alignItems="center" wrap="nowrap">
            <MaterialTypography size="16px" weight={500}>
              {noteId ? t('Update Note') : t('Add Note')}
            </MaterialTypography>

            <CloseButton className={classes.closeButton} onClick={onClose} />
          </Grid>
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <Box mb={3}>
            <Grid container justify="space-between" alignItems="flex-start" wrap="nowrap">
              <Grid item className={classes.newNotePlaceholderWrapper} xs={6}>
                <FormControl variant="outlined" fullWidth size="small" className={classes.formControl}>
                  <InputLabel id="note-placeholder">{t('Note type')}</InputLabel>
                  <Select
                    labelId="note-placeholder"
                    id="note-placeholder"
                    name="noteType"
                    value={values.noteType}
                    onChange={handleChange}
                    label={t('Type')}
                    error={Boolean(touched.noteType && errors.noteType)}
                  >
                    {noteTypes().map(noteType => (
                      <MenuItem key={noteType.key} value={noteType.key}>
                        {noteType.label}
                      </MenuItem>
                    ))}
                  </Select>

                  <FormHelperText>{touched.noteType && errors.noteType}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <DatePicker
                    // label="Date"
                    // format="D MMMM YYYY"
                    inputVariant="outlined"
                    fullWidth
                    size="small"
                    value={values.noteDate}
                    onChange={handleDateChange}
                    error={Boolean(touched.noteDate && errors.noteDate)}
                    helperText={touched.noteDate && errors.noteDate}
                    animateYearScrolling
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon className={classes.calendarIcon} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </Box>

          <Box mb={5}>
            <TextField
              label={t('Please write here your note...')}
              multiline
              variant="outlined"
              name="noteText"
              value={values.noteText}
              onChange={handleChange}
              error={Boolean(touched.noteText && errors.noteText)}
              helperText={touched.noteText && errors.noteText}
              rows={9}
              fullWidth
            />
          </Box>

          <Box mb={3} className={classes.newNoteButtonWrapper}>
            <Button size="large" variant="contained" color="secondary" onClick={handleSubmit}>
              {noteId ? t('Update Note') : t('Add Note')}
            </Button>
          </Box>
        </DialogContent>
      </LoaderWrapper>
    </Dialog>
  );
};

export default NewNote;
