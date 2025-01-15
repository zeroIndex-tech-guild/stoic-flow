import { HomeLayout } from '~/components/layouts/home-layout'
import { CommentSection } from './components/comment-section'
import { StoicContent } from './components/stoic-content'
import { InferPageProps } from '@adonisjs/inertia/types'
import type DailyStoicController from '../../../app/controllers/dayily_stoic_controllers/index'
import { firebaseAuth } from '~/lib/firebase'
import { useGetCurrentUser } from '~/hooks/auth/useGetCurrentUser'

type Props = InferPageProps<DailyStoicController, 'renderDailyStoicPage'>

export default function Home(props: Props) {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 md:gap-8">
      <StoicContent data={props.data} year={props.year} />
      <CommentSection />
    </div>
  )
}

Home.layout = (page: React.ReactNode) => <HomeLayout children={page} />
