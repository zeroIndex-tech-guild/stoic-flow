import { Link } from '@inertiajs/react'
import PersonalNote from './personal-note'
import { DailyStoicEntry } from '#shared/types/daily_stoic'

type Props = {
  data: DailyStoicEntry
  year: number
}

export const StoicContent = (props: Props) => {
  const { data } = props
  return (
    <div className="space-y-8 col-span-12 md:col-span-6">
      {/* Today's Day Count */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Day {data.day} of Your Stoic Journey
        </h1>
      </div>

      {/* Today's Stoic Quote */}
      <div className="text-center mb-8">
        <blockquote className="text-xl italic text-gray-600">"{data.quote}"</blockquote>
        <p className="text-lg text-gray-500 mt-2">- {data.author}</p>
      </div>

      {/* Today's Stoic Reflection */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Reflection</h2>
        <p className="text-lg text-gray-600">{data.reflection}</p>
      </div>

      {/* Today's Stoic Exercise */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Today's Stoic Exercise</h2>
        <p className="text-lg text-gray-600">{data.exercise}</p>
      </div>

      {/* Personal Note Section */}
      <PersonalNote />

      {/* Navigation to Previous Days */}
      <div className="flex justify-between items-center mt-8">
        <Link
          href={`?year=${props.year}&day=${data.day - 1}`}
          className="text-blue-600 hover:underline"
        >
          Previous Day
        </Link>
        <Link
          href={`?year=${props.year}&day=${data.day + 1}`}
          className="text-blue-600 hover:underline"
        >
          Next Day
        </Link>
      </div>
    </div>
  )
}
