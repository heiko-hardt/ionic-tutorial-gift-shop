FROM ubuntu:22.04

# Common environment variables
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64

# Locals & Timezone
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        locales \
        locales-all \
        tzdata \
    && rm -rf /var/lib/apt/lists/* \
    && echo "Europe/Berlin" > /etc/timezone \
    && rm -f /etc/localtime \
    && ln -s /usr/share/zoneinfo/Europe/Berlin /etc/localtime \
    && dpkg-reconfigure -f noninteractive tzdata

# Libraries
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        ant \
        curl \
        debconf-utils \
        git \
        gnupg2 \
        gradle \
        make \
        maven \
        mc \
        openjdk-17-jdk-headless \
        psmisc \
        python3-pip \
        sudo \
        unzip \
        usbutils \
        vim \
        wget \
        zsh \
    && rm -rf /var/lib/apt/lists/* \
    && chsh -s $(which zsh)

# NodeJs based on: https://github.com/nodesource/distributions
RUN curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh \
    && bash nodesource_setup.sh \
    && rm nodesource_setup.sh \
    && apt-get install -y \
        nodejs \
    && rm -rf /var/lib/apt/lists/*

# System User
ARG USERNAME=developer
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID --shell $(which zsh) -m $USERNAME \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        sudo \
    && rm -rf /var/lib/apt/lists/* \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

USER $USERNAME

# Android SDK (https://developer.android.com/studio/#downloads)
ENV ANDROID_SDK_URL="https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip" \
    ANDROID_BUILD_TOOLS_VERSION=34.0.0 \
    ANDROID_SDK_ROOT="/opt/android" \
    ANDROID_HOME="/opt/android"

ENV PATH="$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools:$ANDROID_SDK_ROOT/build-tools/$ANDROID_BUILD_TOOLS_VERSION"

RUN sudo mkdir -p $ANDROID_SDK_ROOT \
    && sudo chown $USERNAME:$USERNAME $ANDROID_SDK_ROOT \
    && cd $ANDROID_SDK_ROOT \
    && wget -O tools.zip ${ANDROID_SDK_URL} \
    && unzip tools.zip \
    && rm tools.zip \
    && mv cmdline-tools latest \
    && mkdir cmdline-tools \
    && mv latest cmdline-tools

RUN mkdir /home/developer/.android \
    && echo '### User Sources for Android SDK Manager' > '/home/developer/.android/repositories.cfg' \
    && yes | sdkmanager --licenses \
    && sdkmanager "platforms;android-34" \
    && sdkmanager "platform-tools" \
    && sdkmanager "build-tools;34.0.0"

# Oh-my-zsh & Ionic
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" --unattended \
    && sudo npm install -g @ionic/cli
