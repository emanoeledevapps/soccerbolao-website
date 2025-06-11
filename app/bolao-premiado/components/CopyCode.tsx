'use client'

interface Props {
  code: string;
}

export function CopyCode({ code }: Props) {
  function copy(): void {
    navigator.clipboard.writeText(code);
    alert('Código copiado para à área de transferência!');
  }

  return (
    <p className="text-white underline hover:cursor-pointer" onClick={copy}>Copiar código</p>
  )
}