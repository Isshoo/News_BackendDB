exports.up = (pgm) => {
  pgm.createTable('datasets', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    file_url: {
      type: 'TEXT',
      notNull: true,
    },
    is_processed: {
      type: 'BOOLEAN',
      notNull: true,
      default: false,
    },
    uploaded_by: {
      type: 'VARCHAR(50)',
      references: '"users"',
      onDelete: 'SET NULL',
    },
    uploaded_at: {
      type: 'TIMESTAMP',
      notNull: true,
      default: pgm.func('CURRENT_TIMESTAMP'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('datasets');
};
