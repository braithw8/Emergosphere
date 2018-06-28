using System.Collections;
using UnityEngine;

[RequireComponent(typeof(AudioSource))]

public class AudioPeer : MonoBehaviour
{

    // Microphone Input
    AudioSource _audioSource;
    public AudioClip _audioClip;
    public bool _useMicrophone;
    public string _selectedDevice;
    //public int deviceSelection;
    void Start()
    {
        for (int i = 0; i < Microphone.devices.Length; i++)
        {
            Debug.Log(Microphone.devices[i].ToString());
        }
    

        _audioSource = GetComponent<AudioSource>();
        if (_useMicrophone)
        {
            if (Microphone.devices.Length > 0)
            {
                _selectedDevice = Microphone.devices[0].ToString();
                _audioSource.clip = Microphone.Start(_selectedDevice, true, 1, AudioSettings.outputSampleRate);
            }
            else
            {
                Debug.Log("no mic");
                _useMicrophone = false;
            }
        }
        else
        {

        }
        if (!_useMicrophone)
        {
            _audioSource.clip = _audioClip;
        }

        _audioSource.Play();

    }
    // Update is called once per frame
    void Update()
    {

    }
}

