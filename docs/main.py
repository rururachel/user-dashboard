import os
from flask import Flask, render_template
from user_dashboard.config import Config
from user_dashboard.database import db

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    with app.app_context():
        db.init_app(app)

    from user_dashboard.routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000)