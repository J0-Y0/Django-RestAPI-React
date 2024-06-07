from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("blog.urls")),
    path("api/", include("blog_api.urls")),
]

admin.site.site_header = "Blog Administration"
admin.site.index_title = "Blog  Administration"
# admin.site.index_title = "index_title"
