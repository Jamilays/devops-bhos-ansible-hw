# Ansible Project

## Initial Setup

- Have a remote (or virtual machine): In my case, it is a Ubuntu 24.04 deployed on Google Cloud.
- Setup a user: In my case, devops
  - It is sudoer which requires password for `sudo`
- Setup public key auth and make sure that you can connect from control node to the machine via `id_rsa`

- Setup instructions on the host

```bash
useradd devops -m -s /bin/bash
usermod -aG sudo devops
su devops
cd ~
mkdir .ssh
vim .ssh/authorized_keys # paste here id_rsa.pub
```

## Documentation

Here you will find the documentation of the Ansible Project:

- [movie-app](movie-app/movie-app.md)
  - Here you will find Documentation about the Web App and its Docker Integrations (Dockerfile, Docker Compose and Container Registry)
- [ansible](ansible/ansible.md)
