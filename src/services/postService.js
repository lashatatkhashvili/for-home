import AppAPI from '../network/AppAPI';
import {
  serializePosts,
  serializePostComments,
  serializeNewComment,
  serializePostReactions,
  serializeMakeReaction,
  serializePost,
  serializePoll,
} from '../serializers/Posts.serializer';
import { comparator } from '../utils/helpers';

class postService {
  static getBuildingPosts = (buildingId, groupId = null) => {
    return AppAPI.get(`/buildings/${buildingId}/posts`, groupId ? { groupId } : {}).then(response => {
      const { Wilboard, Wiv } = response;
      const mergedPosts = (Wilboard || []).concat(Wiv || []).sort(comparator('id', false));
      return serializePosts(mergedPosts);
    });
  };

  static getBuildingPostComments = postId => {
    return AppAPI.get(`/posts/comments/${postId}`).then(response => {
      return serializePostComments(response);
    });
  };

  static getPostReactions = postId => {
    return AppAPI.get(`/posts/${postId}`).then(response => {
      return serializePostReactions(response.user_reactions);
    });
  };

  static addNewComment = (postId, comment) => {
    return AppAPI.post(`/posts/add_comment`, { post_id: postId, comment }).then(response => {
      return serializeNewComment(response);
    });
  };

  static makePostReaction = (postId, reactionId, userId) => {
    return AppAPI.post(`/posts/react`, { post_id: postId, reaction_id: reactionId, user_id: userId }).then(response => {
      return serializeMakeReaction(response);
    });
  };

  static getPostById = postId => {
    return AppAPI.get(`/posts/${postId}`).then(response => {
      return serializePost(response);
    });
  };

  static createPost = formData => {
    return AppAPI.postFile(`/posts/create`, formData).then(response => {
      return serializePost(response);
    });
  };

  static updatePost = (postId, formData) => {
    return AppAPI.postFile(`/posts/update/${postId}`, formData).then(response => {
      return serializePost(response.Post);
    });
  };

  static deletePostImages = imageIds => {
    return AppAPI.post(`/posts/images/delete`, { image_ids: imageIds });
  };

  static deletePost = postId => {
    return AppAPI.delete(`/posts/${postId}`);
  };

  static createPoll = values => {
    return AppAPI.post(`/poll`, values).then(response => {
      return serializePoll(response);
    });
  };

  static votePoll = (pollId, data) => {
    return AppAPI.post(`/poll/${pollId}/vote`, data).then(response => serializePoll(response));
  };

  static getPollById = pollId => {
    return AppAPI.get(`/poll/${pollId}`).then(response => serializePoll(response));
  };

  static updatePoll = (pollId, formData) => {
    return AppAPI.post(`/poll/${pollId}`, formData).then(response => {
      return serializePoll(response);
    });
  };
}

export default postService;
