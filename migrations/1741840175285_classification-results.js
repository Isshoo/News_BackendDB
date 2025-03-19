exports.up = (pgm) => {
  pgm.createTable('classification_results', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      references: '"users"',
      onDelete: 'SET NULL',
    },
    dataset_id: {
      type: 'VARCHAR(50)',
      references: '"datasets"',
      onDelete: 'CASCADE',
    },
    news_text: {
      type: 'TEXT',
      notNull: true,
    },
    hybrid_label: {
      type: 'TEXT',
      notNull: true,
    },
    deepseek_label: {
      type: 'TEXT',
      notNull: true,
    },
    is_correct: {
      type: 'BOOLEAN',
      notNull: false,
    },
    correction_label: {
      type: 'TEXT',
      notNull: false,
    },
    created_at: {
      type: 'TIMESTAMP',
      notNull: true,
      default: pgm.func('CURRENT_TIMESTAMP'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('classification_results');
};
