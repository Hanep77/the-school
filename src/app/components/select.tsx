interface SelectProps {
  name: string,
  label: string,
  defaultValue: string,
  options?: {
    title: string,
    value: string
  }[],
  error?: string
}

export default function Select({ name, label, options, defaultValue, error }: SelectProps) {
  return <div>
    <select name={name} className={`w-full h-10 px-2 bg-white border ${error ? "border-red-500" : "border-zinc-400"} rounded`} defaultValue={defaultValue} required>
      <option>{label}</option>
      {options?.map((item, index) => (
        <option key={index} value={item.value}>{item.title}</option>
      ))}
    </select>
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
}
