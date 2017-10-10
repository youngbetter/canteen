# -*- coding: utf-8 -*-
# flake8: noqa

import json
import urllib2
import time
from qiniu import Auth, put_file, etag, urlsafe_base64_encode
import qiniu.config


# todo 封装auth_token
class AuthKeyHandler:
    def __init__(self):
        self.access_key = 'VXvXqJ2-NjuINwi2cmN1HL96QiMhhNWgzbztAWSS'
        self.secret_key = 'XdQIa3evaqNUukZf7IX1b3H0xtEhlCXhhHYweyGx'
        self.Auth_key = Auth(self.access_key, self.secret_key)
        self.auth_tokens = []

    def get_auth_key(self):
        return self.Auth_key

    def getUrl(self, name):
        auth = self.get_auth_key()
        bucket_domain = 'ox5cwubcf.bkt.clouddn.com'
        base_url = 'http://%s/%s' % (bucket_domain, name)
        private_url = auth.private_download_url(base_url, expires=3600)
        return private_url