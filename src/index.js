module.exports = {
  rules: {
    "no-top-level-use-server": {
      create(context) {
        return {
          Program(node) {
            node.body.forEach((statement) => {
              if (
                statement.type === "ExpressionStatement" &&
                statement.expression.type === "Literal" &&
                statement.expression.value === "use server"
              ) {
                context.report({
                  node: statement,
                  message: 'Top-level "use server" directive is disallowed.',
                });
              }
            });
          },
        };
      },
    },
  },
};
