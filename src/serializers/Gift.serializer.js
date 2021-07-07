import moment from 'moment';
import { OCCASIONS } from '../utils/giftOccasions';

export const serializeGift = gift => {
  return {
    id: gift.id,
    title: gift.title,
    type: gift.gift_type_id,
    description: gift.description,
    image: gift.image,
    status: gift.status,
    recipients: serializeRecipients(gift.recipients),
    createdAt: moment(gift.created_at.date).format('DD MMM'),
  };
};

export const serializeRecipients = recipients => {
  return recipients.map(serializeRecipient);
};

export const serializeGifts = response => {
  return {
    gifts: response.data.map(serializeGift),
    currentPage: response.meta.current_page,
    lastPage: response.meta.last_page,
  };
};
export const serializeRecipient = recipient => {
  return {
    id: recipient.id,
    name: recipient.name,
    phone: recipient.phone,
    email: recipient.email,
    avatar: recipient.avatar,
    orderId: recipient.order_id,
  };
};

export const serializeOccasion = occasion => {
  const currentOccasion = OCCASIONS[occasion.id];

  return {
    ...occasion,
    ...currentOccasion,
  };
};

export const serializeOccasions = response => {
  return response.map(occasion => serializeOccasion(occasion));
};

export const serializeProduct = product => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.pic,
    description: product.description,
  };
};

export const serializeProducts = products => {
  return products.map(product => serializeProduct(product));
};

export const serializeCreateGiftRequest = request => {
  return {
    product_id: request.productId,
    title: request.title,
    description: request.description,
    image: request.image,
    sender_id: request.senderId,
    sender_type: request.senderType,
    gift_type_id: request.giftTypeId,
    recipient_ids: request.recipientIds,
    occasion_id: request.occasionId,
  };
};
