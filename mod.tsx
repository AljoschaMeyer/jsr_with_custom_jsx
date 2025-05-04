import { Expression, Expressions } from "macromania";

export function SomeMacro(
  { children, someProp }: { children: Expressions; someProp: boolean },
): Expression {
  return (
    <>
      <exps x={children} />
      {someProp ? "foo" : "bar"}
    </>
  );
}
