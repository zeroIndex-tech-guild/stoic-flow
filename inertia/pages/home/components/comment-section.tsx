import { useState } from 'react'
import { useGetCurrentUser } from '~/hooks/auth/useGetCurrentUser'

type Comment = {
  id: number
  text: string
  author: string
}

export const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState<string>('')
  const user = useGetCurrentUser()

  console.log({ user })
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value)
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
        author: user?.displayName || 'Anonymous',
        authorId: user?.uid || '',
      }

      console.log(newCommentObj)
      setComments([...comments, newCommentObj])
      setNewComment('')
    }
  }

  return (
    <div className="space-y-8 col-span-12 md:col-span-6">
      <h2 className="text-2xl font-semibold text-gray-800">Discussion</h2>

      {/* Comment Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleCommentSubmit}>
          <div className="mb-4">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md"
              rows={4}
              placeholder="Share your thoughts on today's reflection..."
              value={newComment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6 mt-6 overflow-y-auto max-h-96" id="commentsContainer">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg text-gray-600">{comment.text}</p>
              <p className="text-sm text-gray-400 mt-2">- {comment.author}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
  )
}
