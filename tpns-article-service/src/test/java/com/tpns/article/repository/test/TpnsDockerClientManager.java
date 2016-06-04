package com.tpns.article.repository.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.spotify.docker.client.DefaultDockerClient;
import com.spotify.docker.client.DockerClient;
import com.spotify.docker.client.messages.ContainerConfig;
import com.spotify.docker.client.messages.ContainerCreation;
import com.spotify.docker.client.messages.ContainerInfo;
import com.spotify.docker.client.messages.HostConfig;
import com.spotify.docker.client.messages.PortBinding;

public class TpnsDockerClientManager {

	private static TpnsDockerClientManager instance;

	private DockerClient docker;

	/**
	 * Docker container ( postgres image ) as articledb;
	 */
	private ContainerCreation articledb;

	private String postgresContainerId;

	public TpnsDockerClientManager() {
	}

	public void startContainers() throws Exception {

		this.docker = DefaultDockerClient.fromEnv().build();

		final Map<String, List<PortBinding>> portBindings = new HashMap<String, List<PortBinding>>();
		List<PortBinding> hostPorts = new ArrayList<PortBinding>();
		hostPorts.add(PortBinding.of("0.0.0.0", "5432"));
		portBindings.put("5432", hostPorts);

		final HostConfig hostConfig = HostConfig.builder().portBindings(portBindings).build();

		final ContainerConfig containerConfig = ContainerConfig.builder().hostConfig(hostConfig).image("postgres:9.4").exposedPorts("5432")
				.env("POSTGRES_USER=tpns_article_db", "POSTGRES_PASS=tpns").build();

		// .exposedPorts("0.0.0.0:5432:5432").cmd("sh", "-c", "while :; do sleep
		// 1; done").build();

		this.articledb = docker.createContainer(containerConfig);
		this.postgresContainerId = articledb.id();

		final ContainerInfo info = docker.inspectContainer(postgresContainerId);

		System.out.println(info);

		docker.startContainer(postgresContainerId);

	}

	public void stopContainer() throws Exception {
		docker.killContainer(postgresContainerId);

		// Remove container
		docker.removeContainer(postgresContainerId);

		// Close the docker client
		docker.close();

	}

	public static TpnsDockerClientManager getInstance() {
		if (null == instance) {
			synchronized (TpnsDockerClientManager.class) {
				if (null == instance) {
					instance = new TpnsDockerClientManager();
				}
			}
		}
		return instance;
	}

}
