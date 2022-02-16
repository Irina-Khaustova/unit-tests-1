import createIndication from '../app';

test.each([
  [{ health: 50 }, 'healthy'],
  [{ health: 15 }, 'wounded'],
  [{ health: 0 }, 'critical'],
])(
  ('should calculate indication with %i amount'),
  (options, expected) => {
    const result = createIndication(options);
    expect(result).toBe(expected);
  },
);
