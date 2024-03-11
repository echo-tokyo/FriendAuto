from core.errors.user_errors import ServerProcessError
from .models import Token


def delete_one_token(token: str):
    """Delete given token from table Token"""

    table_token = Token.objects.filter(token=token)

    if not table_token:
        raise ServerProcessError('Cannot process the token.')

    try:
        table_token.delete()
    except Exception:
        raise ServerProcessError('Cannot delete the token.')
