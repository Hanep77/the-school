interface SelectProps {
  name: string,
  label: string,
  defaultValue: string,
  options?: {
    title: string,
    value: string
  }[]
}

export default function Select({ name, label, options, defaultValue }: SelectProps) {
  return <div>
    <select name={name} className="w-full h-10 px-2 bg-white border border-zinc-400 rounded" defaultValue={defaultValue} required>
      <option>{label}</option>
      {options?.map((item, index) => (
        <option key={index} value={item.value}>{item.title}</option>
      ))}
    </select>
  </div>
}
