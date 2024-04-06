import { IconCheckbox, IconCopy as IconCopyTabler } from '@tabler/icons-react'

interface IconCopyProps {
  copiedId: string
  id: string
}

export function IconCopy({ copiedId, id }: IconCopyProps) {
  return (
    <>
      {copiedId === id ? (
        <IconCheckbox size={16} />
      ) : (
        <IconCopyTabler size={16} />
      )}
    </>
  )
}
