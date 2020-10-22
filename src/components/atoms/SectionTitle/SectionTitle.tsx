import React from 'react'

type SectionTitleProps = {
  text: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => <h2 className="ft-selector-title">{text}</h2>

