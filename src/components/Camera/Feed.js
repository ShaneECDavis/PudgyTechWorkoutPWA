import React, { Component } from 'react'

export function initializeMeda() {
  if (!('mediaDevices' in navigator)) {
    navigator.mediaDevices = {}
  }
  if (!('getUserMedia' in navigator.mediaDevices)) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      const getUserMedia =
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia

      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented!'))
      }

      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject)
      })
    }
  }
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function(stream) {
      return
      stream
    })
    .catch(function(err) {})
}
// VideoPlayer

// Cancas Element  -- place to play video

// Button

// image-picker
