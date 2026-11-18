import { ecc } from '../StyleClasses.js';

function ExpenseSummary({ totalAmount }) {
  return (
    <section className={ecc.c}>
      <h3 className={ecc.t}>Total</h3>
      <p className={ecc.d}>{totalAmount}</p>
    </section>
  );
}

export { ExpenseSummary };
