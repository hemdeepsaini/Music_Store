from django.urls import path
# from django.conf.urls import url
from . import views

app_name = 'music'

urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    # url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',views.activate_account, name='activate'),
    path('activate/<uidb64>/<token>/',views.activate_account, name='activate'),
    path('login_user/', views.login_user, name='login_user'),
    path('logout_user/', views.logout_user, name='logout_user'),
    path('<int:album_id>/', views.detail, name='detail'),
    path('<int:song_id>/favorite/', views.favorite, name='favorite'),
    path('songs/<str:filter_by>/', views.songs, name='songs'),
    path('create_album/', views.create_album, name='create_album'),
    path('<int:album_id>/create_song/', views.create_song, name='create_song'),
    path('<int:album_id>/delete_song/<int:song_id>/', views.delete_song, name='delete_song'),
    path('<int:album_id>/favorite_album/', views.favorite_album, name='favorite_album'),
    path('<int:album_id>/delete_album/', views.delete_album, name='delete_album'),
   # path('recommendations/<str:filter_by>/', views.recommendations, name='recommendations'),
]
