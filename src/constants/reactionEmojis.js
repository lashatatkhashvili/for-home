import { GreatEmojiWv, BadEmojiWv, SadEmojiWv, NeutralEmojiWv, GoodEmojiWv } from '../components/icons/Icons';

export const emojiTypesByPercentage = {
  '0': BadEmojiWv,
  '20': SadEmojiWv,
  '40': NeutralEmojiWv,
  '60': GoodEmojiWv,
  '80': GreatEmojiWv,
};

export default [BadEmojiWv, SadEmojiWv, NeutralEmojiWv, GoodEmojiWv, GreatEmojiWv];
