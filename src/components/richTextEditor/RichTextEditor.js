import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditor = props => {
  const { value, onChange, height } = props;
  return (
    <Editor
      apiKey="o86wtrtwre34h38brc3fot7tgfhm9u2x0somuiuxf03t86cm"
      initialValue={value}
      init={{
        height: height,
        branding: false,
        resize: false,
        menubar: false,
        content_css: '/assets/fonts/fonts.css',
        plugins: ['importcss', 'directionality', 'wordcount', 'emoticons'],
        custom_colors: false,
        toolbar:
          'formatselect forecolor  emoticons | bold italic underline |  alignleft aligncenter alignright | ltr rtl',
        block_formats: 'Paragraph=p; Header=h3; Header 2=h4;',
        setup: function(editor) {
          editor.ui.registry.addIcon(
            'highlight-bg-color',
            `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="font-color">
                                      <rect id="Rectangle-Copy-203" stroke="#2E3537" fill="#FFFFFF" opacity="0.102074033" x="0.5" y="0.5" width="23" height="23" rx="4"></rect>
                                      <g id="Group-52" transform="translate(6.000000, 5.155000)" fill="#2E3537" fill-rule="nonzero">
                                        <path d="M12,11.845 L12,13.765 L0,13.765 L0,11.845 L12,11.845 Z M7.11,5.59552404e-13 L10.785,9.345 L11.61,9.69 L11.6970833,9.73 C11.8290278,9.805 11.895,9.92166667 11.895,10.08 L11.895,10.08 L11.895,10.845 L8.235,10.845 L8.235,10.08 L8.24333333,9.99833333 C8.27111111,9.86777778 8.36833333,9.765 8.535,9.69 L8.535,9.69 L8.835,9.57 L8.235,7.935 L3.915,7.935 L3.315,9.57 L3.615,9.69 L3.70666667,9.73833333 C3.84555556,9.82444444 3.915,9.93833333 3.915,10.08 L3.915,10.08 L3.915,10.845 L0.255,10.845 L0.255,10.08 L0.263333333,9.99833333 C0.291111111,9.86777778 0.388333333,9.765 0.555,9.69 L0.555,9.69 L1.38,9.345 L5.04,5.59552404e-13 L7.11,5.59552404e-13 Z M6.075,1.86 L5.94,2.325 L5.85666667,2.59666667 C5.79888889,2.77888889 5.73666667,2.96333333 5.67,3.15 L5.67,3.15 L4.44,6.51 L7.725,6.51 L6.48,3.135 L6.41875,2.96208333 C6.31458333,2.66069444 6.2,2.29333333 6.075,1.86 L6.075,1.86 Z" id="Combined-Shape"></path>
                                      </g>
                                    </g>
                                  </g>
                                </svg>`
          );
          editor.ui.registry.addIcon(
            'bold',
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <g fill="none" fill-rule="evenodd">
                                    <rect width="23" height="23" x=".5" y=".5" fill="#FFF"  opacity=".102" stroke="#2E3537" rx="4"/>
                                    <path fill="#2E3537" fill-rule="nonzero" d="M12.52 5.432c.768 0 1.413.07 1.936.208.555.15.997.357 1.328.624.341.267.592.592.752.976.16.384.24.805.24 1.264 0 .288-.037.55-.112.784-.075.235-.203.47-.384.704-.16.192-.373.384-.64.576-.235.16-.539.31-.912.448 1.59.352 2.384 1.21 2.384 2.576 0 .49-.096.944-.288 1.36-.192.427-.464.79-.816 1.088-.33.288-.768.523-1.312.704-.512.17-1.11.256-1.792.256H7.32v-.944c0-.267.133-.432.4-.496l.096-.016.05-.004.19-.044.48-.08v-8.4l-.48-.08-.074-.016-.062-.016c-.037-.01-.072-.016-.104-.016l-.096-.016c-.267-.064-.4-.23-.4-.496v-.944h5.2zm.336 6.496H10.68v3.392h2.192c.405 0 .741-.048 1.008-.144.267-.096.48-.224.64-.384.17-.17.288-.357.352-.56.075-.192.112-.421.112-.688 0-.224-.043-.448-.128-.672-.085-.213-.208-.384-.368-.512s-.379-.235-.656-.32c-.256-.075-.581-.112-.976-.112zm-.336-4.832h-1.84v3.344h1.728c.736 0 1.29-.133 1.664-.4.373-.267.56-.693.56-1.28 0-.597-.17-1.024-.512-1.28-.33-.256-.864-.384-1.6-.384z"/>
                                  </g>
                                </svg>`
          );
          editor.ui.registry.addIcon(
            'italic',
            `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="italic">
                                      <rect id="Rectangle-Copy-201" stroke="#2E3537" fill="#FFFFFF" opacity="0.102074033" x="0.5" y="0.5" width="23" height="23" rx="4"></rect>
                                      <path d="M13.712,17 L13.808,16.312 C13.8293333,16.152 13.776,16.056 13.648,16.024 L13.648,16.024 L12.704,15.832 L13.824,6.696 L14.752,6.52 C14.9226667,6.488 15.0186667,6.38666667 15.04,6.216 L15.04,6.216 L15.12,5.544 L11.264,5.544 L11.184,6.216 C11.1626667,6.376 11.2106667,6.472 11.328,6.504 L11.328,6.504 L12.272,6.696 L11.152,15.832 L10.224,16.008 C10.0533333,16.04 9.95733333,16.1413333 9.936,16.312 L9.936,16.312 L9.856,17 L13.712,17 Z" id="I" fill="#2E3537" fill-rule="nonzero"></path>
                                    </g>
                                  </g>
                                </svg>`
          );
          editor.ui.registry.addIcon(
            'underline',
            ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <g fill="none" fill-rule="evenodd">
                                    <rect width="23" height="23" x=".5" y=".5" fill="#FFF" stroke="#2E3537" opacity=".102" rx="4"/>
                                    <g fill="#2E3537" fill-rule="nonzero">
                                      <path d="M11.712.688c0 .17-.085.272-.256.304l-.912.176v5.808c0 1.323-.405 2.421-1.216 3.296-.832.885-1.947 1.328-3.344 1.328-1.387 0-2.496-.443-3.328-1.328-.821-.875-1.232-1.973-1.232-3.296V1.168l-.66-.13-.157-.036L.512.976C.352.944.272.843.272.672V0h4.016v.672c0 .17-.085.272-.256.304l-1.056.176v5.792c0 1.003.267 1.792.8 2.368.544.608 1.285.912 2.224.912.939 0 1.68-.304 2.224-.912.533-.597.8-1.381.8-2.352V1.152L7.968.976c-.17-.032-.256-.133-.256-.304V0h4v.688zM12 13.616L12 12.656 0 12.656 0 13.616z" transform="translate(6 5.544)"/>
                                    </g>
                                  </g>
                                </svg>`
          );
          editor.ui.registry.addIcon(
            'align-left',
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <g fill="none" fill-rule="evenodd" stroke="#2E3537">
                                    <rect width="23" height="23" x=".5" y=".5" fill="#FFF" opacity=".102" rx="4"/>
                                    <g>
                                      <path d="M0 15.5L8 15.5M0 10.5L16 10.5M0 5.5L8 5.5M0 .5L16 .5" transform="translate(4 4)"/>
                                    </g>
                                  </g>
                                </svg>`
          );
          editor.ui.registry.addIcon(
            'align-right',
            ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <g fill="none" fill-rule="evenodd" stroke="#2E3537">
                                    <rect width="23" height="23" x=".5" y=".5" fill="#FFF" opacity=".102" rx="4"/>
                                    <g>
                                      <path d="M8 15.5L16 15.5M0 10.5L16 10.5M8 5.5L16 5.5M0 .5L16 .5" transform="translate(4 4)"/>
                                    </g>
                                  </g>
                                </svg>`
          );
          editor.ui.registry.addIcon(
            'align-center',
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <g fill="none" fill-rule="evenodd" stroke="#2E3537">
                                    <rect width="23" height="23" x=".5" y=".5" fill="#FFF" opacity=".102" rx="4"/>
                                    <g>
                                      <path d="M4 15.5L12 15.5M0 10.5L16 10.5M4 5.5L12 5.5M0 .5L16 .5" transform="translate(4 4)"/>
                                    </g>
                                  </g>
                                </svg>`
          );
          editor.ui.registry.addIcon(
            'outdent',
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <g fill="none" fill-rule="evenodd">
                                      <rect width="23" height="23" x=".5" y=".5" fill="#FFF" stroke="#2E3537" opacity=".102" rx="4"/>
                                      <g>
                                          <path stroke="#2E3537" d="M0 15.385L16 15.385M6 11.692L16 11.692M6 8L16 8M6 4.308L16 4.308M0 .615L16 .615" transform="translate(4 4)"/>
                                          <path fill="#2E3537" d="M2 6L4.462 10 -0.462 10z" transform="translate(4 4) matrix(0 1 1 0 -6 6)"/>
                                      </g>
                                  </g>
                              </svg>`
          );
          editor.ui.registry.addIcon(
            'indent',
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <g fill="none" fill-rule="evenodd">
                                    <rect width="23" height="23" x=".5" y=".5" fill="#FFF" stroke="#2E3537" opacity=".102" rx="4"/>
                                    <g>
                                      <path stroke="#2E3537" d="M0 15.385L16 15.385M6 11.692L16 11.692M6 8L16 8M6 4.308L16 4.308M0 .615L16 .615" transform="translate(4 4)"/>
                                      <path fill="#2E3537" d="M2 6L4.462 10 -0.462 10z" transform="translate(4 4) rotate(90 2 8)"/>
                                    </g>
                                  </g>
                              </svg>`
          );
        },
      }}
      onChange={onChange}
    />
  );
};

export default RichTextEditor;
