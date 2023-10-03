#!/usr/bin/node
import requests

def get_movie_title_by_episode(episode_number):
    url = f'https://swapi-api.hbtn.io/api/films/:id'
    
    response = requests.get(url)
    
    if response.status_code == 200:
        movie_data = response.json()
        return movie_data['title']
    else:
        return None
        