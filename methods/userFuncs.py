#!/usr/bin/env Python
# coding=utf-8
from handlers.Database import models
from handlers.Database.tables import User


class UFuncs(object):

    def judge_user_valid(self, tel, psw):
        try:
            user = models.get_db().query(User).filter(User.userTel == tel).one()
            if user.userPsw == psw:
                return True
            return False
        except Exception,e:
            return False