export class InternshipsService {
  constructor($resource, api, TransformRequestService) {
    'ngInject';

    this.resource = $resource(api + 'v1/internships/:internshipId', {internshipId: '@internshipId'}, {
      get: {
        method: 'GET'
      },
      query: {
        method: 'GET',
        isArray: true
      },
      delete: {
        method: 'DELETE'
      },
      add: {
        method: 'POST',
        transformRequest: TransformRequestService.transform,
        headers: {
          'Content-Type': undefined
        }
      },
      update: {
        method: 'PUT'
      }
    });


  }




}
