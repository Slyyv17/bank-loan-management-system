'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Customers",
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true,
            validate: {
                notNull: {
                    msg: "Id is required",
                },
                notEmpty: {
                    msg: "Id is required",
                },
                len: {
                    args: [3, 255],
                    msg: "Name should be between 3 and 255 characters",
                },
            }
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Phone Number is required",
                },
                notEmpty: {
                    msg: "Phone Number is required",
                }
            }
        },
        dob: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Date of birth required",
                },
                notEmpty: {
                    msg: "Date of birth required",
                }
            }
        },
        jobTitle: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Job title is required",
                },
                notEmpty: {
                    msg: "Job title is required",
                }
            }
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    },
    );
        
    await queryInterface.createTable('Loan', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      loanType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      loanAmount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      purpose: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      loanTerm: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      interestRate: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
      },
      collateral: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'unverified', 'rejected'),
        defaultValue: 'unverified',
        allowNull: false,
      },
      approvedAmt: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('Compliance', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      loanId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Loan',
          key: 'id',
        },
      },
      amlDoc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      taxReporting: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      regulationStatus: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected'),
        allowNull: false,
      },
      createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
      },
      updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('LoanOfficer', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('LoanApplication', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      customerId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Customers',
          key: 'id',
        },
      },
      loanId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Loan',
          key: 'id',
        },
      },
      loanOfficerId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'LoanOfficer',
          key: 'id',
        },
      },
      reviewDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
      },
      updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('Repayment', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      loanId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Loan',
          key: 'id',
        },
      },
      paymentDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paymentAmount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      paymentMethod: {
        type: Sequelize.ENUM('card', 'bank_transfer'),
        allowNull: false,
      },
      latePenalty: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Repayment');
    await queryInterface.dropTable('LoanApplication');
    await queryInterface.dropTable('Compliance');
    await queryInterface.dropTable('Loan');
    await queryInterface.dropTable('LoanOfficer');
    await queryInterface.dropTable('Customers');
  },
};
