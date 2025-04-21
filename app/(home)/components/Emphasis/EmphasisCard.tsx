interface Props {
  title: string
  description: string
}

export function EmphasisCard({ description, title }: Props) {
  return (
    <div className="flex flex-col gap-5 p-5 border-x border-b rounded-2xl border-gray-1 max-w-[220px]">
      <div className="w-10 h-10 bg-green-1"/>

      <p className="font-bold text-green-1">{title}</p>
      <p className="text-white">{description}</p>
    </div>       
  )
}
