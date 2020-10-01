export class ProjectUtils {

  static getImgPath(project: any) {
    return "/img/project/" + project.title + "/";
  }
  static getThumbnail(project: any) {
    return ProjectUtils.getImgPath(project) + "thumbnail.jpg";
  }
  
  static getURL(project: any) {
    return "/projects/" + project.title;
  }
}