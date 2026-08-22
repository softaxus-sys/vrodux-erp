/**
 * Hidden decoy input. Real users never see or fill it; many bots fill every
 * field they find. Kept out of the tab order and hidden from screen readers.
 */
export function HoneypotField({ register }: { register: { name: string; onChange: (e: unknown) => void; onBlur: (e: unknown) => void; ref: (el: unknown) => void } | Record<string, unknown> }) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor="website-hp">Leave this field empty</label>
      <input
        id="website-hp"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register}
      />
    </div>
  );
}
