export const serializePost = post => {
  return {
    id: post.id,
    buildingId: post.building_id,
    userId: post.user_id,
    identifier: post.identifier,
    title: post.title,
    text: post.text,
    created: post.created_at,
    myReaction: post.my_reaction,
    postTypeId: post.posttype_id,
    commentCount: post.comment_count,
    comments: serializePostComments(post.comments),
    images: serializePostImages(post.images),
    reactionCount: post.reaction_count,
    reactions: [],
    user: post.user,
    isPrivate: post.private,
    isReactionsFetching: false,
    isCommentsFetching: false,
    isFetching: false, // TODO: must be replaced with 'isCommentsFetching'
    poll: serializePoll(post.poll),
  };
};

export const serializePoll = poll => {
  if (!poll) return;
  return {
    id: poll.id,
    created: poll.created_at,
    userId: poll.user_id,
    text: poll.text,
    isPrivate: poll.private,
    options: poll.options.map(opt => serializePollOption(opt)),
    myVote: poll.my_vote,
    voteCount: poll.votes_count,
  };
};

export const serializePosts = posts => {
  return !posts ? [] : posts.map(post => serializePost(post));
};

export const serializePostComments = comments => {
  return comments.map(comment => {
    return {
      id: comment.id,
      created: comment.created_at,
      comment: comment.comment,
      user: comment.user,
    };
  });
};

export const serializePostReactions = reactionsObject => {
  const reactions = Object.keys(reactionsObject)
    .map(reactionId => reactionsObject[reactionId])
    .flat();
  return reactions.map(reaction => {
    return {
      id: reaction.id,
      reactionId: reaction.reaction_id,
      userId: reaction.user_id,
      avatar: reaction.avatar,
      name: reaction.name,
      email: reaction.email,
    };
  });
};

export const serializeNewComment = comment => {
  return {
    id: comment.id,
    created: comment.created_at,
    comment: comment.comment,
    user: comment.user,
  };
};

export const serializeMakeReaction = response => {
  const { reaction } = response;

  return {
    id: reaction.id,
    reactionId: reaction.reaction_id,
    userId: reaction.user_id,
  };
};

export const serializePostImages = images => {
  return images.map(image => {
    return {
      id: image.id,
      direction: image.direction,
      image: image.image,
      original: image.original,
      thumbnail: image.thumb_image,
    };
  });
};

export const serializeCreatePostRequest = formValues => {
  return {
    text: formValues.text,
    building_id: formValues.buildingId,
    poll_id: formValues.id ? formValues.id : null,
    private: formValues.isPrivate ? 1 : 0,
    images: formValues.images.length ? formValues.images : undefined,
    groupId: formValues.groupId ? formValues.groupId : undefined,
  };
};

export const serializeUpdatePostRequest = formValues => {
  return {
    text: formValues.text,
    building_id: formValues.buildingId,
    poll_id: formValues.pollId ? formValues.pollId : null,
    private: formValues.isPrivate ? 1 : 0,
    images: formValues.images ? formValues.images : undefined,
  };
};

export const serializeNewPollRequest = formValues => {
  return {
    text: formValues.text,
    private: formValues.isPrivate,
    options: formValues.options,
  };
};

export const serializeUpdatePollRequest = formValues => {
  return {
    text: formValues.text,
    private: formValues.isPrivate,
    options: formValues.options,
  };
};

export const serializePollOption = option => {
  return {
    id: option.id,
    created: option.created_at,
    pollId: option.poll_id,
    option: option.option,
    voteCount: option.vote_count,
  };
};

export const serializePollVoteRequest = (optionId, previousOptionId) => {
  return {
    newOption: optionId,
    oldOption: previousOptionId,
  };
};
