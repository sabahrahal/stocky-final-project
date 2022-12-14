"""empty message

Revision ID: 99d812a0f3c1
Revises: ea3fd7409154
Create Date: 2022-12-08 05:41:10.205947

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '99d812a0f3c1'
down_revision = 'ea3fd7409154'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('customer_order', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date', sa.String(length=80), nullable=True))
        batch_op.add_column(sa.Column('payment_id', sa.String(length=80), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('customer_order', schema=None) as batch_op:
        batch_op.drop_column('payment_id')
        batch_op.drop_column('date')

    # ### end Alembic commands ###
