"""empty message

Revision ID: 375b45f941bc
Revises: ef017a645411
Create Date: 2022-12-03 19:05:08.251806

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '375b45f941bc'
down_revision = 'ef017a645411'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('company', schema=None) as batch_op:
        batch_op.add_column(sa.Column('img_url', sa.String(length=240), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('company', schema=None) as batch_op:
        batch_op.drop_column('img_url')

    # ### end Alembic commands ###
