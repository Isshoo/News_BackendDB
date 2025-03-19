exports.up = (pgm) => {
  pgm.createTable('model_evaluations', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    dataset_id: {
      type: 'VARCHAR(50)',
      references: '"datasets"',
      onDelete: 'CASCADE',
    },
    parameter_id: {
      type: 'VARCHAR(50)',
      references: '"model_parameters"',
      onDelete: 'CASCADE',
    },
    accuracy: {
      type: 'FLOAT',
      notNull: true,
    },
    precision: {
      type: 'FLOAT',
      notNull: true,
    },
    recall: {
      type: 'FLOAT',
      notNull: true,
    },
    f1_score: {
      type: 'FLOAT',
      notNull: true,
    },
    created_at: {
      type: 'TIMESTAMP',
      notNull: true,
      default: pgm.func('CURRENT_TIMESTAMP'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('model_evaluations');
};
