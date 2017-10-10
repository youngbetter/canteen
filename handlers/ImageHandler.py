# -*- coding: utf-8 -*-
import time

from handlers.Database.models import get_db
from handlers.Database.tables import Images
from handlers.AuthkeyHandler import AuthKeyHandler
from qiniu import Auth, put_file, etag, urlsafe_base64_encode
import qiniu.config
import random, string


class ImageHandler(AuthKeyHandler):

    def insertSingle(self, local):
        # 构建鉴权对象
        q = self.Auth_key
        # 要上传的空间
        bucket_name = 'seucanteen'
        # 上传到七牛后保存的文件名
        key = self.generateKey(8)
        # 生成上传 Token，可以指定过期时间等
        token = q.upload_token(bucket_name, key, 3600)
        # 要上传文件的本地路径
        localfile = local
        put_file(token, key, localfile)
        return key

    def generateKey(self, length):
        # 随机出数字的个数
        numOfNum = random.randint(1, length - 1)
        numOfLetter = length - numOfNum
        # 选中numOfNum个数字
        slcNum = [random.choice(string.digits) for i in range(numOfNum)]
        # 选中numOfLetter个字母
        slcLetter = [random.choice(string.ascii_letters) for i in range(numOfLetter)]
        # 打乱这个组合
        slcChar = slcNum + slcLetter
        random.shuffle(slcChar)
        # 生成密码
        genKey = ''.join([i for i in slcChar])
        return genKey
