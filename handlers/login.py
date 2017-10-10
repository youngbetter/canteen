#!/usr/bin/env Python
# coding=utf-8

import tornado.web
import json
from methods.BaseHandler import BaseHandler
from methods.userFuncs import UFuncs


class LoginHandler(BaseHandler):

    retjson = []

    def get(self):
        self.render("login.html")

    def post(self):
        account = self.get_argument('userTel')
        password = self.get_argument("userPsw")
        userfunc = UFuncs()
        if userfunc.judge_user_valid(account, password):
            self.retjson = "登陆成功"
        else:
            self.retjson = "登陆失败"
            self.get()
        self.write(json.dumps(self.retjson, ensure_ascii=False, indent=2))