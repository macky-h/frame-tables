import React from 'react'
import useSWR from 'swr'
import { FrameTables } from '../../components/molecules/FrameTables'

const titleList = ['技名', '発生', '硬直', '無敵']

type FrameTablesContainerProps = {
  currentName: string
}

export const FrameTablesContainer: React.FC<FrameTablesContainerProps> = ({currentName}) => {
  const { data, error } = useSWR('./data/tech.json')

  if (error) return <div>error!</div>
  if (!data) return <div>loading...</div>

  return(
    <FrameTables titleList={titleList} techList={data[currentName]} />
  )
}
