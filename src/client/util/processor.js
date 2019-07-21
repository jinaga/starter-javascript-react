export function run(operation) {
  operation().catch((err) => console.error(err));
}

export function handler(operation) {
  return () => run(operation);
}

export function formHandler(operation) {
  return event => {
    event.preventDefault();
    run(operation);
  };
}
