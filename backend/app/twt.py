import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("./key.json")
default_app = firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://overlay-twitch-default-rtdb.firebaseio.com/'
})
ref = db.reference('infos')


def save_stream_info(info):
    print(default_app.name)
    for x in info:
        split = x.split(':')
        item = split[0]
        value = split[1]
        info_ref = ref.child(f'{item}')
        info_ref.update({
            'value': f'{value}'
        })
        print(f'{item}\n{value}\n____________________')
    return "ola"
