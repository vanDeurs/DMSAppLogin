var responseData = { 
    authenticatUser: {
      "ERR":0,
      "RSP":{  
      "AUTHC":"true",
      "USR":{  
         "ID":"2",
         "TJT":"FULL",
         "ACTV":"true",
         "BO":"1489760664786",
         "CONT":{  
            "FNM":"John",
            "LNM":"Doe",
            "PHN":"5556667777",
            "PHNTP":"NONE",
            "EML":"ex@mple.com",
            "EMLTP":"NONE"
         },
         "ADMIN":"false",
         "LLOGN":"1489760664786",
         "ACCT":{  
            "ID":"2",
            "TJT":"ID"
         }
      }
   }
  
  },
    getUserAccountDetails: {
        "ERR":0,
        "RSP":{  
        "ACCT":{  
         "ID":"2",
         "TJT":"FULL",
         "ACTV":"true",
         "BO":"1489760664786",
         "LU":"1489760664786",
         "NM":"Name",
         "DESC":"Description",
         "CONT":{  
             "FNM":"John",
             "LNM":"Doe",
             "PHN":"5556667777",
             "PHNTP":"NONE",
             "EML":"ex@mple.com",
             "EMLTP":"NONE"
         },
            "ADDRM":{  
                "STRT":"1 Miracle Way",
                "CITY":"San Antonio",
                "STATE":"Texas",
                "ZIP":"78245"
         },
            "ADDRB":{  
                "STRT":"1 Miracle Way",
                "CITY":"San Antonio",
                "STATE":"Texas",
                "ZIP":"78245"
         },
            "TZ":"US_CT",
            "LICS":"1",
            "REPOS":[  
                {  
                "ID":"2",
                "TJT":"ID"
            }
            ],
            "USRS":[  
                {  
                    "ID":"2",
                    "TJT":"ID"
                }
            ]
        }
        }
    },
    getDocumentType: {
        "ERR":0,
        "RSP":{  
            "DOCSTP":[  
                {  
                    "ID":"2",
                    "TJT":"FULL",
                    "ACTV":"true",
                    "BO":"1489760664786",
                    "LU":"1489760664786",
                    "NM":"DocType Name",
                    "FLD0":{  
                       "NM":"Field Name0",
                       "RQD":"true",
                       "SLNS":{  
                          "ID":"2",
                          "TJT":"FULL",
                          "ACTV":"true",
                          "BO":"1489760664786",
                          "LU":"1489760664786",
                          "VAL[0-29]":"Values",
                          "DFLT":"0"
                       }
                    },
                    "FLD1":{  
                       "NM":"Field Name1",
                       "RQD":"true",
                       "SLNS":{  
                          "ID":"2",
                          "TJT":"FULL",
                          "ACTV":"true",
                          "BO":"1489760664786",
                          "LU":"1489760664786",
                          "VAL[0-29]":"Values",
                          "DFLT":"0"
                       }
                    },
                    "FLD2":{  
                       "NM":"Field Name2",
                       "RQD":"true",
                       "SLNS":{  
                          "ID":"2",
                          "TJT":"FULL",
                          "ACTV":"true",
                          "BO":"1489760664786",
                          "LU":"1489760664786",
                          "VAL[0-29]":"Values",
                          "DFLT":"0"
                       }
                    },
                    "FLD3":{  
                       "NM":"Field Name3",
                       "RQD":"true",
                       "SLNS":{  
                          "ID":"2",
                          "TJT":"FULL",
                          "ACTV":"true",
                          "BO":"1489760664786",
                          "LU":"1489760664786",
                          "VAL[0-29]":"Values",
                          "DFLT":"0"
                       }
                    },
                    "FLD4":{  
                       "NM":"Field Name4",
                       "RQD":"true",
                       "SLNS":{  
                          "ID":"2",
                          "TJT":"FULL",
                          "ACTV":"true",
                          "BO":"1489760664786",
                          "LU":"1489760664786",
                          "VAL[0-29]":"Values",
                          "DFLT":"0"
                       }
                    },
                    "FLD5":{  
                       "NM":"Field Name5",
                       "RQD":"true",
                       "FMT":"DOUBLE"
                    },
                    "FLD6":{  
                       "NM":"Field Name6",
                       "RQD":"true",
                       "FMT":"DOUBLE"
                    },
                    "FLD7":{  
                       "NM":"Field Name7",
                       "RQD":"true",
                       "FMT":"DOUBLE"
                    },
                    "FLD8":{  
                       "NM":"Field Name8",
                       "RQD":"true"
                    },
                    "FLD9":{  
                       "NM":"Field Name9",
                       "RQD":"true"
                    },
                    "AUDIT":"true",
                    "ENCD":"true",
                    "CMP":"true",
                    "ACCT":{  
                       "ID":"0",
                       "TJT":"ID"
                    }
                 }
              ]
        }
    },
    getFolderandDocument: {  
   "ERR":0,
   "RSP":{  
      "FLDR":{  
         "ID":"2",
         "TJT":"FULL",
         "ACTV":"true",
         "BO":"1489760664786",
         "LU":"1489760664786",
         "NM":"Name",
         "DESC":"Description",
         "ACCT":{  
            "ID":"2",
            "TJT":"ID"
         },
         "REPO":{  
            "ID":"2",
            "TJT":"ID"
         },
         "USR":{  
            "ID":"2",
            "TJT":"ID"
         },
         "FLDR":{  
            "ID":"2",
            "TJT":"ID"
         },
         "FLDRS":[  
            {  
               "ID":"2",
               "TJT":"FULL",
               "DOCS":[  
                  {  
                     "ID":"2",
                     "TJT":"FULL",
                     "PROPS":[  
                        {  
                           "ID":"2",
                           "TJT":"FULL",
                           "ACTV":"true",
                           "BO":"1489760664786",
                           "LU":"1489760664786",
                           "NM":"Example Name",
                           "VAL":"Example Value",
                           "PROPTP":{  
                              "ID":"2",
                              "TJT":"ID"
                           }
                        },
                         {  
                        }
                     ]
                  }
               ]
            }
         ]
      }
   }
    }
}














