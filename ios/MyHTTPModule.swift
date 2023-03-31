//
//  MyHTTPModule.swift
//  sendGift
//
//  Created by fin on 28/03/2023.
//
// MyHTTPModule.swift

import Foundation
import React

@objc(MyHTTPModule)
class MyHTTPModule: NSObject {
    
    @objc
    func makeRequest(_ url: String, params: [String: Any]?, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) -> Void {
        
        // Construct the URL
        guard let urlObj = URL(string: url) else {
            rejecter("invalid_url", "Invalid URL", nil)
            return
        }
        
        // Construct the request object
        var request = URLRequest(url: urlObj)
        request.httpMethod = "GET"
        
        // Add parameters to the request
        if let params = params {
            request.addValue("application/json", forHTTPHeaderField: "Content-Type")
            request.httpBody = try? JSONSerialization.data(withJSONObject: params, options: [])
        }
        
        // Send the request
        let session = URLSession.shared
        let task = session.dataTask(with: request) { data, response, error in
            if let error = error {
                rejecter("network_error", error.localizedDescription, error)
            } else if let data = data {
                if let json = try? JSONSerialization.jsonObject(with: data, options: []) as? [String: Any] {
                    resolver(json)
                } else {
                    resolver(nil)
                }
            } else {
                resolver(nil)
            }
        }
        task.resume()
    }
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
