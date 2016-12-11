'use strict'


const streamItems = module.exports = [
  {
    "attributes":{
      "event_time":"2016-05-06T14:50:33",
      "event_name":"logged_in",
      "user_id":"1",
      "user_login":"testuser",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
      "root_account_id":"500",
      "root_account_lti_guid":"ba946141-5533-4c3e-8fcf-18afbc495d90",
      "context_type":"TEST",
      "context_id":"7",
      "role":"STUDENT",
      "hostname":"test.instructure.com",
      "request_id":"1AF",
      "session_id":"7BE",
      "real_user_id":"0"
    },
    "body":{
      "redirect_url":"http://test.instructure.com/course_home"
    }
  },

  {
    "attributes":{
      "event_time":"2016-05-08T10:20:33",
      "event_name":"asset_accessed",
      "user_id":"1",
      "user_login":"testuser",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
      "root_account_id":"500",
      "root_account_lti_guid":"ba946141-5533-4c3e-8fcf-18afbc495d90",
      "context_type":"TEST",
      "context_id":"7",
      "role":"STUDENT",
      "hostname":"test.instructure.com",
      "request_id":"1AF",
      "session_id":"7BE",
      "real_user_id":"0"
    },
    "body":{
      "asset_type":"Course",
      "asset_id":"1"
    }
  },

  {
    "attributes":{
      "event_time":"2016-05-09T12:20:33",
      "event_name":"submission_created",
      "user_id":"1",
      "user_login":"testuser",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
      "root_account_id":"500",
      "root_account_lti_guid":"ba946141-5533-4c3e-8fcf-18afbc495d90",
      "context_type":"TEST",
      "context_id":"7",
      "role":"STUDENT",
      "hostname":"test.instructure.com",
      "request_id":"1AF",
      "session_id":"7BE",
      "real_user_id":"0"
    },
    "body":{
      "submission_id":"1",
      "assignment_id":"2",
      "user_id":"1",
      "submitted_at":"2016-08-17T08:15:32",
      "updated_at":"2016-08-17T08:16:03",
      "score":"10",
      "grade":"10",
      "submission_type":"online_upload",
      "attempt":"1"
    }
  },

  {
    "attributes":{
      "event_time":"2016-05-09T12:20:33",
      "event_name":"quiz_submitted",
      "user_id":"1",
      "user_login":"testuser",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
      "root_account_id":"500",
      "root_account_lti_guid":"ba946141-5533-4c3e-8fcf-18afbc495d90",
      "context_type":"TEST",
      "context_id":"7",
      "role":"STUDENT",
      "hostname":"test.instructure.com",
      "request_id":"1AF",
      "session_id":"7BE",
      "real_user_id":"0"
    },
    "body":{
      "submission_id":"3000003",
      "quiz_id":"10"
    }
  },

  {
    "attributes":{
      "event_time":"2016-05-09T12:20:33",
      "event_name":"grade_changed",
      "user_id":"1",
      "user_login":"testuser",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
      "root_account_id":"500",
      "root_account_lti_guid":"ba946141-5533-4c3e-8fcf-18afbc495d90",
      "context_type":"TEST",
      "context_id":"7",
      "role":"STUDENT",
      "hostname":"test.instructure.com",
      "request_id":"1AF",
      "session_id":"7BE",
      "real_user_id":"0"
    },
    "body":{
      "submission_id":"10010101",
      "grade":"A",
      "grade_changed":"B"
    }
  },

  {
    "attributes":{
      "event_time":"2016-05-09T12:20:33",
      "event_name":"enrollment_updated",
      "user_id":"1",
      "user_login":"testuser",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
      "root_account_id":"500",
      "root_account_lti_guid":"ba946141-5533-4c3e-8fcf-18afbc495d90",
      "context_type":"TEST",
      "context_id":"7",
      "role":"STUDENT",
      "hostname":"test.instructure.com",
      "request_id":"1AF",
      "session_id":"7BE",
      "real_user_id":"0"
    },
    "body":{
      "enrollment_id":"3000003",
      "user_id":"10"
    }
  },

  {
    "attributes":{
      "event_time":"2016-05-09T12:20:33",
      "event_name":"enrollment_created",
      "user_id":"1",
      "user_login":"testuser",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
      "root_account_id":"500",
      "root_account_lti_guid":"ba946141-5533-4c3e-8fcf-18afbc495d90",
      "context_type":"TEST",
      "context_id":"7",
      "role":"STUDENT",
      "hostname":"test.instructure.com",
      "request_id":"1AF",
      "session_id":"7BE",
      "real_user_id":"0"
    },
    "body":{
      "enrollment_id":"3000003",
      "user_id":"10"
    }
  }
]
