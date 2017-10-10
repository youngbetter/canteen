#!/usr/bin/env Python
# coding=utf-8

from urls import urls
from handlers.Database.models import engine
from sqlalchemy.orm import scoped_session, sessionmaker
import tornado.web
import os

settings = dict(
    template_path=os.path.join(os.path.dirname(__file__), "templates"),
    static_path=os.path.join(os.path.dirname(__file__), "statics")
    )

db = scoped_session(sessionmaker(bind=engine, autocommit=False,
                                 autoflush=True, expire_on_commit=False))

application = tornado.web.Application(
    handlers=urls,
    **settings
)
