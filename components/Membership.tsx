const PLANS = [
  { name: "Basic", price: "Rs. 3,500", period: "/month" },
  { name: "Standard", price: "Rs. 5,000", period: "/month", featured: true },
  { name: "Premium", price: "Rs. 9,000", period: "/month" },
];

const ROWS: { feature: string; values: [boolean | string, boolean | string, boolean | string] }[] = [
  { feature: "Full gym floor access, 6AM–11PM", values: [true, true, true] },
  { feature: "Locker room & shower access", values: [true, true, true] },
  { feature: "Women-only hours (2–5PM)", values: [true, true, true] },
  { feature: "Group conditioning classes", values: [false, true, true] },
  { feature: "Monthly progress assessment", values: [false, true, true] },
  { feature: "Personal trainer sessions", values: [false, "1 / month", "2 / week"] },
  { feature: "Custom nutrition guidance", values: [false, false, true] },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <span className="text-brass-500">&#10003;</span>;
  }
  if (value === false) {
    return <span className="text-steel-300">&mdash;</span>;
  }
  return <span className="text-[14px] text-iron-900">{value}</span>;
}

export default function Membership() {
  return (
    <section id="membership" className="texture-bone">
      <div className="container-x py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <h2 className="font-display text-4xl font-bold text-iron-950 sm:text-5xl">
            Membership
          </h2>
          <p className="mt-3 max-w-md text-[16px] text-steel-500">
            No joining fee this month, and no lock-in contract — cancel any
            time with seven days&rsquo; notice at the front desk.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[38%]"></th>
                {PLANS.map((plan) => (
                  <th
                    key={plan.name}
                    className={`rule border-t-2 px-4 pb-6 pt-2 align-bottom font-normal ${
                      plan.featured ? "border-t-brass-500" : "border-t-iron-950/20"
                    }`}
                  >
                    <p className="font-display text-2xl font-bold text-iron-950">
                      {plan.name}
                    </p>
                    <p className="mt-1">
                      <span className="font-display text-3xl font-bold text-rust-600">
                        {plan.price}
                      </span>
                      <span className="text-[13px] text-steel-500">
                        {" "}
                        {plan.period}
                      </span>
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className="rule border-t">
                  <th className="py-4 pr-4 text-[14px] font-medium text-steel-700">
                    {row.feature}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={i} className="px-4 py-4 text-[15px]">
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td></td>
                {PLANS.map((plan) => (
                  <td key={plan.name} className="px-4 pt-6">
                    <a
                      href="tel:+923144274441"
                      className={`inline-block w-full border px-4 py-3 text-center text-[14px] font-semibold transition-colors ${
                        plan.featured
                          ? "border-brass-500 bg-brass-500 text-iron-950 hover:bg-brass-400"
                          : "border-iron-950 text-iron-950 hover:bg-iron-950 hover:text-bone-100"
                      }`}
                    >
                      Choose {plan.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
