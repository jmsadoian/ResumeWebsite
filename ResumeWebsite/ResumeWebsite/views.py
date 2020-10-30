"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template, request
from ResumeWebsite import app

@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )

@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
        'contact.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/about')
def about():
    """Renders the about page."""
    return render_template(
        'about.html',
        title='Professional Resume',
        year=datetime.now().year
    )
@app.route('/apps')
def apps():
    """Renders the about page."""
    return render_template(
        'apps.html',
        title='List of Webapps',
        year=datetime.now().year
    )

@app.route('/weather')
def weather():
    """Renders the about page."""
    return render_template(
        'weather.html',
        title='Weather',
        year=datetime.now().year
    )
@app.route('/dice', methods=["POST","GET"])
def dice():
    """Renders the about page."""
    return render_template(
        'dice.html',
        title='Roll some dice',
        year=datetime.now().year
    )

@app.route('/store')
def store():
    """Renders the about page."""
    return render_template(
        'store.html',
        title='Online Store',
        year=datetime.now().year
    )

@app.route('/roll', methods=["POST"])
def roll():
    print(request.form['dice'])
    return "hello"