import { notFound } from 'next/navigation'
import teamData from '@/lib/data/team.json'
import { RoleTimelineEntry } from '@/types'
import ClientMemberPage from './ClientMemberPage'

interface MemberPageProps {
  params: Promise<{
    member: string
  }>
}

// Generate static params for all team members
export async function generateStaticParams() {
  const allMembers = [
    ...teamData.current.map((member) => member.name),
    ...teamData.tech.map((member) => member.name),
  ]

  return allMembers.map((memberName) => ({
    member: encodeURIComponent(memberName),
  }))
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { member } = await params
  const memberName = decodeURIComponent(member)

  // Find member in current team
  let memberData: any = teamData.current.find((m) => m.name === memberName)
  let memberType = 'current'

  // If not found in current, check tech team
  if (!memberData) {
    memberData = teamData.tech.find((m) => m.name === memberName)
    memberType = 'tech'
  }

  if (!memberData) {
    notFound()
  }

  // Create roles timeline (only for current team members)
  const rolesTimeline: RoleTimelineEntry[] =
    memberType === 'current' && memberData.roles
      ? (teamData.plays
          .map((play, index) => ({
            year: play.split(' ')[0],
            play: play,
            role: memberData.roles[index],
          }))
          .filter((entry) => entry.role !== null) as RoleTimelineEntry[])
      : []

  return (
    <ClientMemberPage
      member={memberData}
      memberType={memberType}
      rolesTimeline={rolesTimeline}
    />
  )
}
