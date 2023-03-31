//
//  ContactsManager.swift
//  sendGift
//
//  Created by fin on 29/03/2023.
//

import Foundation
import Contacts
import React


@objc(ContactsManager)
class ContactsManager: NSObject {
  
  
    // Native Module implementation goes here
  
  @objc
  func readphonecontact(_ callBack: RCTResponseSenderBlock){
    
    let store = CNContactStore()
    let keys = [CNContactGivenNameKey, CNContactFamilyNameKey, CNContactPhoneNumbersKey]
    let request = CNContactFetchRequest(keysToFetch: keys as [CNKeyDescriptor])
    var contacts = [NSDictionary]()

    do {
        try store.enumerateContacts(with: request) { (contact, stop) in
            let contactDict: [String: Any] = [
                "firstName": contact.givenName,
                "lastName": contact.familyName,
                "phoneNumbers": contact.phoneNumbers.map({ $0.value.stringValue })
            ]
            contacts.append(contactDict as NSDictionary)
        }
      callBack([NSNull(), contacts])
    } catch {
      callBack([error.localizedDescription, NSNull()])
    }
 
  }
  
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
      return true
  }
 

}
