export default function SpecificationTable({ specifications }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#ECE8DA] bg-[#F9F8F2]">
      <table className="min-w-full divide-y divide-[#ECE8DA] text-left">
        <thead className="bg-[#F3EFE5]">
          <tr>
            <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#2B2B2B]">Specification</th>
            <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#2B2B2B]">Value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#ECE8DA]">
          {Object.entries(specifications).map(([label, value]) => (
            <tr key={label} className="text-sm text-[#6B7280]">
              <td className="px-6 py-4 font-medium text-[#2B2B2B]">{label}</td>
              <td className="px-6 py-4">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
